import { useRef, useState } from "react";

const Resume = () => {
    const formRef = useRef()
    console.log('rerender!');
    const [userName, setName] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userPhone, setPhone] = useState('')
    const [userNameSubmit, setNameSubmit] = useState('')
    const [userEmailSubmit, setEmailSubmit] = useState('')
    const [userPhoneSubmit, setPhoneSubmit] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('formdata', formRef);
        // console.log('e', e);
        // const usernamething = formRef.current
        const submitString = `username: ${userName}\r email: ${userEmail}, phone: ${userPhone}`;
        console.log(submitString);
        setNameSubmit(userName);
        setEmailSubmit(userEmail);
        setPhoneSubmit(userPhone);
      };

    return (
        <div>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div>
                    Name: <input name="userName" value={userName} onChange={handleNameChange} ></input>
                </div>
                <div>
                    Email: <input name="userEmail" value={userEmail} onChange={handleEmailChange} ></input>
                </div>
                <div>
                    Phone: <input name="userPhone" value={userPhone} onChange={handlePhoneChange} ></input>
                </div>
                <button type="submit">Submit</button>

            </form>
            <div>
                <div>
                    UserName: {userNameSubmit}
                </div>
                <div>
                    Email: {userEmailSubmit}
                </div>
                <div>
                    Phone: {userPhoneSubmit}
                </div>
            </div>

        </div>
    );
};

export default Resume;