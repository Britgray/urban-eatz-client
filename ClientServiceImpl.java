package com.grayb.urbanEatz.service;

import com.grayb.urbanEatz.Exception.ClientAlreadyExistsException;
import com.grayb.urbanEatz.Exception.ClientNotFoundException;
import com.grayb.urbanEatz.model.Client;
import com.grayb.urbanEatz.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements IClientService {


    private final ClientRepository clientRepository;

    @Override
    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    @Override
    public Client addClient(Client client) {
        if(clientAlreadyExists(client.getEmail())){
            throw new ClientAlreadyExistsException(client.getEmail() + " already exists!");
        }

        return clientRepository.save(client);
    }


    @Override
    public Client updateClient(Client client, Long id) {
        return clientRepository.findById(id).map(st -> {
            st.setFirstName(client.getFirstName());
            st.setLastName(client.getLastName());
            st.setNameOfBusiness(client.getNameOfBusiness());
            st.setEmail(client.getEmail());
            st.setCategory(client.getCategory());
            return clientRepository.save(st);
        }).orElseThrow(()-> new ClientNotFoundException("Sorry, this client could not be found"));
    }

    @Override
    public Client getClientById(Long id) {
        return clientRepository.findById(id)
                .orElseThrow(()-> new ClientNotFoundException("Sorry, no clients were not found with this id: " + id));
    }

    @Override
    public void deleteClient(Long id) {
        if(!clientRepository.existsById(id)){
           throw new ClientNotFoundException("Sorry, client not found");
        }
        clientRepository.deleteById(id);

    }

    private boolean clientAlreadyExists(String email) {
        return clientRepository.findByEmail(email).isPresent();
    }


}
