package ru.itis.infosecurity.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping(path = "/")
    public String getMetrixPage() {
        return "base";
    }
}
