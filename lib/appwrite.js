

import { Account, Avatars, Client, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // یا endpoint خودت
  .setProject("69cb73dc0010011635fc");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client)