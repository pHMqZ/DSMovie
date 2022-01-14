package com.pms.dsmovie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.dsmovie.model.Score;
import com.pms.dsmovie.model.ScorePk;

public interface ScoreRepository extends JpaRepository<Score, ScorePk>{
	
	

}
