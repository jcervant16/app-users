import { Button, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import TextFieldOutline from "../text-fields/text-field-outline";


export default function BasicCard(props: any) {
    const [isFocused, setIsFocused] = useState(false);
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);


    const handleFocus = (id: number) => {
        setIsFocused(true);
    };

    const handleBlur = (id: number) => {
        setIsFocused(false);
    };

    const handleSaved = (event: any) => {
        console.log(event)
        props.onSave(event)
    };

    const handleChangeName = (event: any) => {
        setName(event.target.value);
    };
    const handleChangeEmail = (event: any) => {
        setEmail(event.target.value);
    };
    const handleChangePhone = (event: any) => {
        setPhone(event.target.value);
    };

    return (
        <Card sx={{ width: 285, height: 200 }} className="customCard" tabIndex={0} onClick={() => { handleFocus(props.id) }}
            onBlur={() => handleBlur(props.id)} key={props.id}>
            <CardContent>
                <Typography component={'div'} sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                    <TextFieldOutline value={name} onChange={handleChangeName} />
                </Typography>

                <Typography component={'div'} sx={{ mb: 1.5 }} color="text.secondary" >
                    <span className="text-sky-500 dark:text-sky-400">
                        <TextFieldOutline value={email} onChange={handleChangeEmail} />
                    </span>
                </Typography>
                <Typography component={'div'} variant="body2">
                    <small> Phone: </small> <TextFieldOutline value={phone} onChange={handleChangePhone} config={{ width: '24ch', }} />
                </Typography>
                <div className="icon-save">
                    {
                        isFocused &&
                        <IconButton onClick={handleSaved} className="button-saved">
                            <SaveIcon />
                        </IconButton>

                    }
                </div>
            </CardContent>



        </Card >
    );
}

