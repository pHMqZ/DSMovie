package com.pms.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.dsmovie.model.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	

}
