/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package in.ashish29agre.mvn.socketchat;

import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;
import javax.websocket.EncodeException;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author AshishRAgre
 */
@ServerEndpoint("/chat")
public class SocketChat {

    private static Logger logger = Logger.getLogger(HelloSocket.class.getName());
    private static Set<Session> peers = Collections.synchronizedSet(new HashSet<Session>());

    @OnMessage
    public void message(String message, Session client) throws IOException, EncodeException {
        for (Session s : client.getOpenSessions()) {
            s.getBasicRemote().sendText(message);
        }
    }
}
