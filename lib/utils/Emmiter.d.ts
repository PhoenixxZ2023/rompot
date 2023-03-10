/// <reference types="node" />
import EventEmitter from "events";
import Message from "../messages/Message";
import User from "../modules/User";
import Chat from "../modules/Chat";
import { ConnectionType } from "../types/Connection";
import { UserAction } from "../types/User";
import { ChatAction } from "../types/Chat";
export declare type BotEventsMap = {
    /**
     * * Conexão alterada
     * @param action Tipo da conexão
     * @param isNewLogin Se é um novo bot
     */
    conn: {
        action: ConnectionType;
        isNewLogin?: boolean;
        qr?: string;
    };
    /**
     * * Client conectou
     * @param isNewLogin Se é um novo login
     */
    open: {
        isNewLogin: boolean;
    };
    /** * Client reconectando */
    reconnecting: {};
    /** * Client conectando */
    connecting: {};
    /** * Sessão do bot encerrada */
    closed: {};
    /** * Conexão fechada */
    close: {};
    /** * QR code gerado */
    qr: string;
    /**
     * * Novo usuário
     * @param action Ação ocorrida
     * @param chat Sala de bate-papo que recebeu o novo usuário
     * @param user Usuário
     */
    user: {
        action: UserAction;
        chat: Chat;
        user: User;
    };
    /**
     * * Sala de bate-papo alterado
     * @param action ação ocorrida
     * @param chat Sala de bate-papo que foi alterada
     */
    chat: {
        action: ChatAction;
        chat: Chat;
    };
    /** * Nova mensagem */
    message: Message;
    /** * Erro ocorrido */
    error: Error;
};
export declare type ClientEventsMap = {
    /**
     * * Conexão alterada
     * @param action Tipo da conexão
     * @param isNewLogin Se é um novo bot
     */
    conn: {
        action: ConnectionType;
        isNewLogin?: boolean;
        qr?: string;
    };
    /**
     * * Client conectou
     * @param isNewLogin Se é um novo login
     */
    open: {
        isNewLogin: boolean;
    };
    /** * Client reconectando */
    reconnecting: {};
    /** * Client conectando */
    connecting: {};
    /** * Sessão do bot encerrada */
    closed: {};
    /** * Conexão fechada */
    close: {};
    /** * QR code gerado */
    qr: string;
    /**
     * * Novo usuário
     * @param action Ação ocorrida
     * @param chat Sala de bate-papo que recebeu o novo usuário
     * @param user Usuário
     */
    user: {
        action: UserAction;
        chat: Chat;
        user: User;
    };
    /**
     * * Sala de bate-papo alterado
     * @param action ação ocorrida
     * @param chat Sala de bate-papo que foi alterada
     */
    chat: {
        action: ChatAction;
        chat: Chat;
    };
    /** * Nova mensagem */
    message: Message;
    /** * Erro ocorrido */
    error: Error;
};
export declare class ClientEvents {
    events: EventEmitter;
    constructor();
    on<T extends keyof ClientEventsMap>(eventName: T, listener: (arg: ClientEventsMap[T]) => void): void;
    off<T extends keyof ClientEventsMap>(eventName: T, listener: (arg: ClientEventsMap[T]) => void): void;
    removeAllListeners<T extends keyof ClientEventsMap>(event: T): void;
    /** * Emite um evento */
    emit<T extends keyof ClientEventsMap>(eventName: T, arg: ClientEventsMap[T]): boolean;
}
export declare class BotEvents {
    events: EventEmitter;
    constructor();
    on<T extends keyof BotEventsMap>(eventName: T, listener: (arg: BotEventsMap[T]) => void): void;
    off<T extends keyof BotEventsMap>(eventName: T, listener: (arg: BotEventsMap[T]) => void): void;
    removeAllListeners<T extends keyof BotEventsMap>(event: T): void;
    /** * Emite um evento */
    emit<T extends keyof BotEventsMap>(eventName: T, arg: BotEventsMap[T]): boolean;
}
