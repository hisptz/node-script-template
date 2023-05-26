import {Command} from "commander";
import appDetails from "../../package.json"
import logger from "../logging";

const helloProgram = new Command();

helloProgram.name("hello-dhis2-script").description("An example program. Delete this when using the template").version(appDetails.version);

helloProgram.command("say-hi").option("-n --name <name>", "The name of the user").action((args) => {
    const {name} = args ?? {}
    //Here you can call any of your functions to do what is necessary. Use the args to access the argument object as specified on the options
    logger.info(`Hello ${name}, Welcome to the dhis2-node-script`)
})

export {
    helloProgram
}
