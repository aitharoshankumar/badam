package com.badamshakti.auth.controller;

import com.badamshakti.auth.entity.User;
import com.badamshakti.auth.service.AuthService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService service;

    public AuthController(AuthService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {
        String token = service.login(user.getEmail(), user.getPassword());
        return Map.of("token", token);
    }
}
