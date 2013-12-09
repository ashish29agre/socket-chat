/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package in.ashish29agre.mvn.socketchat;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;
import javax.websocket.OnMessage;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author AshishRAgre
 */
@ServerEndpoint("/sayhello")
public class HelloSocket {
    private static Logger logger = Logger.getLogger(HelloSocket.class.getName());
    private static Set<Session> peers = Collections.synchronizedSet(new HashSet<Session>());

    @OnMessage
    public String onMessage(String message) {
        logger.info("Server received this " + message);
        return "Hello " + message;
    }

}
