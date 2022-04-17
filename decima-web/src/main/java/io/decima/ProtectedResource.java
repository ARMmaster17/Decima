package io.decima;

import io.decima.model.Greeting;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/api/protected")
public class ProtectedResource {
    @GET
    @RolesAllowed("user")
    @Produces(MediaType.APPLICATION_JSON)
    public Greeting hello() {
        return new Greeting("Hello user!");
    }
}
