import React, { useState } from "react";
import { TextField, Button, Typography, Box, FormControl, Select, MenuItem, InputLabel } from "@mui/material";

const JobPostCreation = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobFile, setJobFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle posting job functionality here
    console.log("Job posted:", { jobTitle, jobDescription, skillsRequired, budget, deadline, jobType, jobFile });
  };

  return (
    <div className="min-h-screen bg-green-500 p-8">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
        <Typography variant="h4" className="text-center text-primary font-montserrat mb-6">
          Post a Job
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Job Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            className="font-montserrat"
          />
          <TextField
            label="Job Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
            multiline
            rows={4}
            className="font-montserrat"
          />
          <TextField
            label="Skills Required"
            variant="outlined"
            fullWidth
            margin="normal"
            value={skillsRequired}
            onChange={(e) => setSkillsRequired(e.target.value)}
            required
            className="font-montserrat"
          />
          <TextField
            label="Budget"
            variant="outlined"
            fullWidth
            margin="normal"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            className="font-montserrat"
          />
          <TextField
            label="Deadline"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
            InputLabelProps={{
              shrink: true,
            }}
            className="font-montserrat"
          />
          
          <FormControl fullWidth margin="normal">
            <InputLabel>Job Type</InputLabel>
            <Select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              label="Job Type"
              required
            >
              <MenuItem value="one-time">One-Time Project</MenuItem>
              <MenuItem value="recurring">Recurring Task</MenuItem>
            </Select>
          </FormControl>

          <Box className="mt-4">
            <input
              type="file"
              onChange={(e) => setJobFile(e.target.files[0])}
              className="hidden"
              id="jobFile"
            />
            <label htmlFor="jobFile">
              <Button variant="contained" component="span" fullWidth color="primary">
                Attach Files
              </Button>
            </label>
            {jobFile && <Typography variant="body2" className="mt-2 text-textSecondary">{jobFile.name}</Typography>}
          </Box>

          <Box className="mt-4 flex justify-between">
            <Button
              type="button"
              
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="success" sx={{ textTransform: 'none' }}>
              Post Job
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default JobPostCreation;
