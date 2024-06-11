import { Client,Account } from "appwrite";

const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("6661d28600059451e965")

const account = new Account(client)

export default { account,client }