package com.example.tasktracker;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class TaskTrackerApplicationTests {

    @Autowired
    private TaskTrackerApplication taskTrackerApplication;

    @Test
    public void contextLoads() {
        // Check if the Spring context loads successfully
        assertThat(taskTrackerApplication).isNotNull();
    }
}
