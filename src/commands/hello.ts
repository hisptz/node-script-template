import {Command} from "commander";
import appDetails from "../../package.json"

const helloProgram = new Command();

helloProgram.name("hello-dhis2-script").description("An example program. Delete this when using the template").version(appDetails.version);

helloProgram.command("say-hi").option("-n --name <name>", "The name of the user").action((args) => {
    const {name} = args ?? {}
    console.log(`Hello ${name}, Welcome to the dhis2-node-script`)
})

export {
    helloProgram
}
