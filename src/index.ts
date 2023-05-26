import {config} from "dotenv";
import {helloProgram} from "./commands/hello";

config()
helloProgram.parse(process.argv)





