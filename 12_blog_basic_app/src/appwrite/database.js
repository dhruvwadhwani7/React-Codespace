import { Client ,Storage , Databases, ID , Query } from "appwrite";
import config from "../config/config";


export class Service{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
             return await this.databases.createDocument( 
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("APPWRITE SERVICE :: createPost :: error ",error)
        }
    }
//https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("APPWRITE SERVICE :: updatePost :: error ",error)
        }

    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("APPWRITE SERVICE :: deletePost :: error ",error)
            return false 
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("APPWRITE SERVICE :: deletePost :: error ",error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries //queries are pass on as an array
            )
        } catch (error) {
            console.log("APPWRITE SERVICE :: getPosts :: error ",error)
        }
    }


    //for storage services 
    async uploadFile(file){
        try{
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("APPWRITE SERVICE :: uploadFile :: error ",error)
        }
    }

    async deleteFile(fileId){
        try{
            return await this.storage.deleteFile(
                config.appwriteBucketId ,
                fileId
            )
        }
        catch(error){
            console.log("APPWRITE SERVICE :: deleteFile :: error ",error)
        }
    }

    async getFilePreview(fileId){
        try{
            return this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        }
        catch(error){
            console.log("APPWRITE SERVICE :: getFilePreview :: error ",error)
        }
    }

}

const service = new Service()
export default service
