// libraries
import {useEffect, useState} from "react";
import {useDropzone} from "react-dropzone";
import LazyLoad from 'react-lazy-load';
import {Box, FormControl, Typography} from "@mui/material";
import {FiCamera} from "react-icons/fi";

const AvatarInput = ({
                         label,
                         name,
                         value,
                         preview,
                         onChange,
                         error,
                         touched,
                         onBlur,
                     }) => {

    const [file, setFile] = useState({});

    const {getRootProps, getInputProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            setFile(Object.assign(acceptedFiles[0], {
                preview: URL.createObjectURL(acceptedFiles[0])
            }));
            onChange(acceptedFiles[0]);
        },
    });

    useEffect(() => {
        return () => URL.revokeObjectURL(file.preview);
    }, [file]);

    return (
        <FormControl
            variant="outlined"
            fullWidth
            onBlur={onBlur}
        >

            {
                label && (
                    <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        fontWeight="bold"
                        gutterBottom
                    >
                        {label}
                    </Typography>
                )
            }

            <Box
                {...getRootProps()}
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100,
                    height: 100,
                    bgcolor: "secondary.main",
                    color: "ternary.main",
                    borderRadius: 1,
                    cursor: "pointer",
                    padding: 1,
                    overflow: "hidden"
                }}
            >

                <input
                    {...getInputProps({name: name})}
                    style={{display: "none"}}
                />

                {
                    (file?.preview || preview) ? (
                        <LazyLoad
                            width="100%"
                            height="100%"
                            threshold={0.5}
                        >
                            <img
                                src={file?.preview ? file?.preview : preview}
                                alt="avatar"
                                width="100%"
                                height="100%"
                                style={{borderRadius: 8}}
                            />
                        </LazyLoad>
                    ) : (
                        <FiCamera size={32}/>
                    )
                }

            </Box>

            {
                (touched && error) && (
                    <Typography
                        variant="caption"
                        color="error"
                        fontWeight="bold"
                        sx={{marginTop: 1}}
                    >
                        {error}
                    </Typography>
                )
            }

        </FormControl>
    )
}

export default AvatarInput;