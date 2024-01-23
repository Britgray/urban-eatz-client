package com.grayb.urbanEatz.service;


import com.grayb.urbanEatz.Exception.ClientAlreadyExistsException;
import com.grayb.urbanEatz.model.Client;

import java.util.List;

public interface IClientService {

    Client addClient(Client client);
    List<Client> getClients();

    Client updateClient(Client client, Long id);

    Client getClientById(Long id);

    void deleteClient(Long id);




}
