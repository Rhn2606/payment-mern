import { Bottom } from "../components/Bottom"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { Input} from "../components/Input"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username , setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />

        <Input onChange={e => {
          setFirstName(e.target.value)
        }} label={"First Name"} />

        <Input onChange={e => {
          setLastName(e.target.value)
        }} label={"Last Name"} />

        <Input onChange={e => {
          setUsername(e.target.value)
        }} label={"Username"} />

        <Input onChange={e => {
          setPassword(e.target.value)
        }} label={"Password"} />

        <div className="pt-4">
          <Button onClick = { async () => {
           const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            })
            localStorage.setItem("token", response.data.token)
          
            navigate("/dashboard")
          }}
            label={"Sign up"} />
        </div>
        <Bottom label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}