import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

const JobApplication = () => {
  const { jobId } = useParams();
  const job = {
    id: jobId,
    title: "Web Developer Needed",
    description:
      "We are looking for a talented web developer to build a website for a local business. The developer will be responsible for creating the website from scratch, including frontend and backend work.",
    skills: "React, Node.js, MongoDB, HTML, CSS",
    budget: "Negotiable",
    deadline: "2025-04-30",
  };

  const [coverLetter, setCoverLetter] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [savedForLater, setSavedForLater] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    console.log("Applied for Job with:", { coverLetter, portfolio, hourlyRate });
    // Handle job application submission here
  };

  return (
    <div className="min-h-screen bg-green-500 p-8">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
        <Typography variant="h4" className="text-center text-primary font-montserrat mb-6">
          Apply for Job: {job.title}
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Description:</strong> {job.description}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Skills Required:</strong> {job.skills}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Budget:</strong> {job.budget}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Deadline:</strong> {job.deadline}
        </Typography>

        <form onSubmit={handleApply}>
          <TextField
            label="Cover Letter"
            variant="outlined"
            fullWidth
            margin="normal"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
            multiline
            rows={4}
            className="font-montserrat"
          />
          <TextField
            label="Portfolio Link"
            variant="outlined"
            fullWidth
            margin="normal"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            required
            className="font-montserrat"
          />
          <TextField
            label="Hourly Rate"
            variant="outlined"
            fullWidth
            margin="normal"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            required
            className="font-montserrat"
          />

          <Box className="flex justify-between mt-4">
            <Button
              type="button"
              
              onClick={() => setSavedForLater(true)}
            >
              Save for Later
            </Button>
            <Button type="submit" variant="contained" color="success">
              Apply Now
            </Button>
          </Box>

          {savedForLater && (
            <Typography variant="body2" color="textSecondary" className="mt-2">
              This job has been saved for later.
            </Typography>
          )}
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
