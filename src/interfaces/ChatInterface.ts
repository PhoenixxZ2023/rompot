import { MessageInterface } from "@interfaces/MessagesInterfaces";
import UserInterface from "@interfaces/UserInterface";

import { ChatStatus, ChatType } from "../types/Chat";
import { BotModule } from "../types/Bot";
import { Users } from "../types/User";

export default interface ChatInterface {
  /**
   * * ID da sala de bate-papo
   */
  id: string;

  /**
   * * Tipo da sala de bate-papo
   */
  type: ChatType;

  /**
   * * Status da sala de bate-papo
   */
  status: ChatStatus;

  /**
   * * Nome da sala de bate-papo
   */
  name: string;

  /**
   * * Descrição da sala de bate-papo
   */
  description: string;

  /**
   * * Foto de perfil da sala de bate-papo
   */
  profile: Buffer;

  /**
   * * Usuários que estão naquela sala de bate-papo
   */
  users: Users;

  /**
   * * Bot irá executar os métodos
   */
  bot: BotModule;

  /**
   * @returns Retorna o nome da sala de bate-papo
   */
  getName(): Promise<string>;

  /**
   * * Define o nome da sala de bate-pao
   * @param name Nome da sala de bate-pao
   */
  setName(name: string): Promise<void>;

  /**
   * @returns Retorna a descrição da sala de bate-papo
   */
  getDescription(): Promise<string>;

  /**
   * * Define a descrição da sala de bate-pao
   * @param description Descrição da  sala de bate-pao
   */
  setDescription(description: string): Promise<void>;

  /**
   * @returns Retorna a imagem de perfil da sala de bate-papo
   */
  getProfile(): Promise<Buffer>;

  /**
   * * Define a foto de perfil da sala de bate-papo
   * @param image Foto de perfil da sala de bate-papo
   */
  setProfile(image: Buffer): Promise<void>;

  /**
   * @param user Usuário que será verificado
   * @returns Retorna se o usuário é administrador da sala de bate-papo
   */
  IsAdmin(user: UserInterface | string): Promise<boolean>;

  /**
   * @param user Usuário que será verificado
   * @returns Retorna se o usuário é lider da sala de bate-papo
   */
  IsLeader(user: UserInterface | string): Promise<boolean>;

  /**
   * @returns Retorna os administradores daquela sala de bate-papo
   */
  getAdmins(): Promise<Users>;

  /**
   * * Adiciona um usuário a sala de bate-papo
   * @param user Usuário que será adicionado
   */
  addUser(user: UserInterface | string): Promise<void>;

  /**
   * * Remove um usuário da sala de bate-papo
   * @param user
   */
  removeUser(user: UserInterface | string): Promise<void>;

  /**
   * * Promove a administrador um usuário da sala de bate-papo
   * @param user Usuário que será promovido
   */
  promote(user: UserInterface | string): Promise<void>;

  /**
   * * Remove o administrador de um usuário da sala de bate-papo
   * @param user Usuário que terá sua administração removida
   */
  demote(user: UserInterface | string): Promise<void>;

  /**
   * * Sai da sala de bate-papo
   */
  leave(): Promise<void>;

  /**
   * * Envia uma mensagem na sala de bate-papo que a mensagem foi enviada
   * @param message Mensagem que será enviada
   */
  send(message: MessageInterface | string): Promise<MessageInterface>;

  /**
   * * Altera o status da sala de bate-pappo
   * @param status Status da sala de bate-papo
   */
  changeStatus(status: ChatStatus): Promise<void>;
}
