const express = require('express');
const db = require('../conn/db');

const getTodo = async (req, res) => {
  // const userId = req.user.userId;
  db.query('SELECT * FROM resume ', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ data: results });
    }
  });
};

const createTodo = async (req, res) => {
  const { name,
    mobile,
    email,
    role,
    about_me,
    education,
    skill,
    experience,
    project, } = req.body;
  // console.log({ title, description, experience});
  try {

    const resumeData = { 
      name: name,
      mobile: mobile,
      role: role,
      email: email,
      about_me: about_me,
      education: JSON.stringify(education),
      skill: JSON.stringify(skill),
      experience: JSON.stringify(experience),
      project: JSON.stringify(project)
      
    };
    db.query('INSERT INTO resume SET ?', resumeData, (err, result) => {
        if (err) {
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          const newTodo = { resumeData };
          res.json(newTodo);
        }
      });

  } catch (error) {
    console.log(error);
  }

};

const updateResume = async (req, res) => {
  const resumeId = req.params.id; // Assuming the ID is passed as a route parameter
  const {
    name,
    mobile,
    email,
    role,
    about_me,
    education,
    skill,
    experience,
    project,
  } = req.body;

  try {
    const resumeData = {
      name,
      mobile,
      role,
      email,
      education: JSON.stringify(education),
      skill: JSON.stringify(skill),
      experience: JSON.stringify(experience),
      project: JSON.stringify(project),
    };

    db.query('UPDATE resume SET ? WHERE id = ?', [resumeData, resumeId], (err, result) => {
      if (err) {
        console.error('Error updating resume:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Resume not found' });
      } else {
        const updatedResume = {
          id: resumeId,
          ...resumeData,
        };
        res.json(updatedResume);
      }
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteResume = async (req, res) => {
  const resumeId = req.params.id; // Assuming the ID is passed as a route parameter

  try {
    db.query('DELETE FROM resume WHERE id = ?', [resumeId], (err, result) => {
      if (err) {
        console.error('Error deleting resume:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Resume not found' });
      } else {
        res.json({ message: 'Resume deleted successfully' });
      }
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { deleteResume };


module.exports = { getTodo, createTodo, updateResume, deleteResume}