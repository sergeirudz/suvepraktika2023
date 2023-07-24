package com.cgi.library.service;

import com.cgi.library.dto.AuthenticationRequest;
import com.cgi.library.dto.AuthenticationResponse;
import com.cgi.library.dto.RegisterRequest;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);
}
