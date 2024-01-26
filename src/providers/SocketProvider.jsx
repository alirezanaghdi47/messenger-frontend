// libraries
import {createContext, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import io from 'socket.io-client';

// stores
import {
    setIsTypingUsers,
    setOnlineUsers,
    insertMessage,
    removeMessage,
    insertChat,
    removeChat,
    leaveGroupChat,
    joinGroupChat
} from "stores/slices/chatSlice";

export const SocketContext = createContext(null);

const SocketProvider = ({children}) => {

    const socket = useRef(null);
    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.setting.profile);
    const {onlineUsers, isTypingUsers} = useSelector(state => state.chat);

    const _handleConnect = () => {
        socket?.current?.emit("online", {userId: _id, socketId: socket?.current?.id});
        socket?.current?.on("activeUsersResponse", data => {
            dispatch(setOnlineUsers(data));
        });
    }

    const _handleDisConnect = () => {
        socket?.current?.emit("offline", {userId: _id, socketId: socket?.current?.id});
        socket?.current?.on("activeUsersResponse", data => {
            dispatch(setOnlineUsers(data));
        });
    }

    const _handleStartTypingResponse = (data) => {
        dispatch(setIsTypingUsers([...isTypingUsers.filter(user => user.userId !== data.userId && user.chatId !== data.chatId), data]));
    }

    const _handleStopTypingResponse = (data) => {
        dispatch(setIsTypingUsers(isTypingUsers.filter(user => user.userId !== data.userId && user.chatId !== data.chatId)));
    }

    const _handleAddChatResponse = async (data) => {
        dispatch(insertChat(data));
    }

    const _handleDeleteChatResponse = async (data) => {
        dispatch(removeChat(data));
    }

    const _handleJoinGroupChatResponse = async (data) => {
        dispatch(joinGroupChat(data));
    }

    const _handleLeaveGroupChatResponse = async (data) => {
        dispatch(leaveGroupChat(data));
    }

    const _handleAddMessageResponse = async (data) => {
        dispatch(insertMessage(data));
    }

    const _handleDeleteMessageResponse = async (data) => {
        dispatch(removeMessage(data));
    }

    useEffect(() => {
        socket.current = io.connect(process.env.REACT_APP_API_URL);

        socket?.current?.on('connect', _handleConnect);
        socket?.current?.on('startTypingResponse', _handleStartTypingResponse);
        socket?.current?.on('stopTypingResponse', _handleStopTypingResponse);
        socket?.current?.on('addChatResponse', _handleAddChatResponse);
        socket?.current?.on('joinGroupChatResponse', _handleJoinGroupChatResponse);
        socket?.current?.on('leaveGroupChatResponse', _handleLeaveGroupChatResponse);
        socket?.current?.on('deleteChatResponse', _handleDeleteChatResponse);
        socket?.current?.on('addMessageResponse', _handleAddMessageResponse);
        socket?.current?.on('deleteMessageResponse', _handleDeleteMessageResponse);
        socket?.current?.on('disconnect', _handleDisConnect);

        return () => {
            socket?.current?.off('connect', _handleConnect);
            socket?.current?.off('disconnect', _handleDisConnect);
        };
    }, []);

    return (
        <SocketContext.Provider value={{socket, activeUsers: onlineUsers, isTypingUsers}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;