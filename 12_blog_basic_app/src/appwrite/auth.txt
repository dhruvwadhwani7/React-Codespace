import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

      this.account = new Account(this.client)
  }

  async createAccount({email,password,name}){

    // eslint-disable-next-line no-useless-catch
    try {
        const userAccount = await this.account.create(ID.unique(), email,password,name);

        if(userAccount){
            // return userAccount
            //call another method
            return this.login({email,password})
        }
        else {
            return userAccount
        }
    } 
    catch (error) {
        throw error
    }
  }


  async login({email,password}){
    // eslint-disable-next-line no-useless-catch
    try {
        await this.account.createEmailPasswordSession(email,password)
    } catch (error) {
        throw error;
    }
  }

  async getCurrentUser(){
    // eslint-disable-next-line no-useless-catch
    try {
        await this.account.get()
    } catch (error) {
        throw error
    }

    return null //supoose a error and nothing rertuned i. the try catch or just try      
  }

  async logout() {
    // eslint-disable-next-line no-useless-catch
    try {
        await this.account.deleteSessions()
    } catch (error) {
        throw error
    }
  }

}


const authService = new AuthService();

export default authService;
