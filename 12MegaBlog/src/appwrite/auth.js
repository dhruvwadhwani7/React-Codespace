/* eslint-disable no-useless-catch */
import config from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return await this.login({ email, password });
      }

      return null;
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      // If already logged in, return user
      const currentUser = await this.getCurrentUser();
      if (currentUser) return currentUser;

      // Otherwise create session
      await this.account.createEmailPasswordSession(email, password);
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch {
      // 401 = not logged in (NORMAL)
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
