package com.hussam.employeesmanagement.service;

import com.hussam.employeesmanagement.entity.RefreshToken;

import java.util.Optional;

public interface RefreshTokenService {

    Optional<RefreshToken> findByToken(String token);
    RefreshToken createRefreshToken(Long userId);
    RefreshToken verifyExpiration(RefreshToken token);
  public int deleteByUserId(Long userId);
}
