package com.pms.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.dsmovie.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);

}
