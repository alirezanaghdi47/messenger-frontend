// libraries
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDropzone} from "react-dropzone";
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

    const {t} = useTranslation();
    const [file, setFile] = useState({});

    const {getRootProps, getInputProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            setFile(Object.assign(acceptedFiles[0], {
                preview: URL.createObjectURL(acceptedFiles[0])
            }));
            onChange(acceptedFiles[0]);
        },
        maxFiles: 1,
        accept: {
            'image/png': [],
            'image/jpg': [],
            'image/jpeg': [],
        }
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
                        <img
                            src={file?.preview ? file?.preview : preview}
                            alt="avatar"
                            style={{
                                width: "100%",
                                height: "100%",
                                aspectRatio: 1,
                                borderRadius: 8,
                            }}
                        />
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
                        {t(error)}
                    </Typography>
                )
            }

        </FormControl>
    )
}

export default AvatarInput;