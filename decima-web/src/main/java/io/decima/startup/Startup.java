package io.decima.startup;

import io.decima.entity.User;
import io.quarkus.runtime.StartupEvent;

import javax.enterprise.event.Observes;
import javax.inject.Singleton;
import javax.transaction.Transactional;

@Singleton
public class Startup {
    @Transactional
    public void createUsers(@Observes StartupEvent event) {
        User.deleteAll();
        User.add("user", "user", "user");
    }
}
