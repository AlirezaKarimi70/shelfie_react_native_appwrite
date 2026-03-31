import { Account, Avatars, Client } from "react-native-appwrite"

export const client = new Client()

client
  .setProject('69cb73dc0010011635fc')
  .setPlatform('dev.shelfie')

export const account = new Account(client)
export const avatars = new Avatars(client)

