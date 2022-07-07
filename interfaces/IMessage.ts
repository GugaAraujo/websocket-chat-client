export default interface IMessage {
    time: Date,
    name: string,
    avatar: string,
    message: string,
    color: string,
    belongsToThisClient: Boolean
}