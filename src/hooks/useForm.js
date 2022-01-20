import { useState } from "react";

export default function useForm(initialValue, saveFunc) {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState(initialValue);
    const handleInputForm = (e) => {
        setForm(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const submit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        return saveFunc(form).then((r) => setIsLoading(false), (e) => console.log(e));
    }
    return { isLoading, form, handleInputForm, submit };
}