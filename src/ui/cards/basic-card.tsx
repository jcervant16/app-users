import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TextFieldOutline from "../text-fields/text-field-outline";

export default function BasicCard(props: any) {
    const [isFocused, setIsFocused] = useState(false);
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);

    /* useEffect(() => {
        setName(props.name);
        setEmail(props.email);
        setPhone(props.phone);
    }); */
   /*  const handleFocus = () => {
        setIsFocused(true);
        props.onFocusChange({ name, email, phone, focus: true });
    }; */

    const handleBlur = () => {
        setIsFocused(false);
        props.onFocusChange({ name, email, phone, focus: false});
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
        <Card sx={{ width: 275, height: 160 }} className="customCard" tabIndex={0}
            onBlur={handleBlur} key={props.id}>
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
            </CardContent>

        </Card>
    );
}

