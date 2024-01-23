package com.grayb.urbanEatz.controller;

import com.grayb.urbanEatz.model.Client;
import com.grayb.urbanEatz.service.IClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/clients")
@RequiredArgsConstructor
public class ClientController {

    private final IClientService clientService;

    @GetMapping
    public ResponseEntity<List<Client>> getClients(){
        return new ResponseEntity<>(clientService.getClients(), HttpStatus.FOUND);

    }
    @PostMapping
    public Client addClient(@RequestBody Client client){
        return clientService.addClient(client);
    }
    @PutMapping("/update/{id}")
    public Client updateClient(@RequestBody Client client, @PathVariable Long id){
        return clientService.updateClient(client, id);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteClient(@PathVariable Long id ){
        clientService.deleteClient(id);
    }
    @GetMapping("/client/{id}")
    public Client getClientById(@PathVariable Long id){
        return clientService.getClientById(id);
    }
}
