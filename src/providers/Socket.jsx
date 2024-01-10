// libraries
import {createContext, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import io from 'socket.io-client';

// stores
import {
    setIsTypingUsers,
    setOnlineUsers,
    addMessage,
    deleteMessage,
    addChat,
    deleteChat
} from "stores/slices/chatSlice";

export const SocketContext = createContext(null);

const Socket = ({children}) => {

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

    // const _handleGetAllChatResponse = (data) => {
    //     dispatch(setChats(data));
    // }
    //
    // const _handleGetChatResponse = (data) => {
    //     dispatch(setChat(data));
    // }
    //
    // const _handleAddChatResponse = (data) => {
    //     if (data.participantIds[0] === _id) dispatch(hideModal());
    //     socket?.current?.emit("getAllChat", {userId: _id, socketId: socket?.current?.id});
    //     socket?.current?.on("getAllChatResponse", data => {
    //         dispatch(setChats(data));
    //     });
    // }
    //
    // const _handleDeleteChatResponse = (data) => {
    //     if (data._id === params.chatId) navigate("/chat");
    //     socket?.current?.emit("getAllChat", {userId: _id, socketId: socket?.current?.id});
    //     socket?.current?.on("getAllChatResponse", data => {
    //         dispatch(hideModal());
    //         dispatch(setChats(data));
    //     });
    // }
    //
    // const _handleGetAllMessageResponse = (data) => {
    //     dispatch(setMessages(data));
    // }

    const _handleAddChatResponse = async (data) => {
        dispatch(addChat(data));
    }

    const _handleDeleteChatResponse = async (data) => {
        dispatch(deleteChat(data));
    }

    const _handleAddMessageResponse = async (data) => {
        dispatch(addMessage(data));
    }

    const _handleDeleteMessageResponse = async (data) => {
        dispatch(deleteMessage(data));
    }

    useEffect(() => {
        socket.current = io.connect(process.env.REACT_APP_API_URL);

        socket?.current?.on('connect', _handleConnect);
        socket?.current?.on('startTypingResponse', _handleStartTypingResponse);
        socket?.current?.on('stopTypingResponse', _handleStopTypingResponse);
        // socket?.current?.on('getAllChatResponse', _handleGetAllChatResponse);
        // socket?.current?.on('getChatResponse', _handleGetChatResponse);
        // socket?.current?.on('addChatResponse', _handleAddChatResponse);
        // socket?.current?.on('deleteChatResponse', _handleDeleteChatResponse);
        // socket?.current?.on('getAllMessageResponse', _handleGetAllMessageResponse);
        socket?.current?.on('addChatResponse', _handleAddChatResponse);
        socket?.current?.on('deleteChatResponse', _handleDeleteChatResponse);
        socket?.current?.on('addMessageResponse', _handleAddMessageResponse);
        socket?.current?.on('deleteMessageResponse', _handleDeleteMessageResponse);
        // socket?.current?.on('addLocationMessageResponse', _handleAddMessageResponse);
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

export default Socket;