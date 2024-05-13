let exec = true;
let availableJobs = [];

do {
  let option = parseInt(
    window.prompt(
      "Welcome to the Job Vacancy System (JVS)!\n\nPlease choose one of the options below.\n\n1) List available jobs.\n2) Post a job.\n3) View a job.\n4) Register a candidate.\n5) Delete a job.\n6) Shut down."
    )
  );
  switch (option) {
    case 1:
      if (availableJobs.length === 0) {
        window.alert("No jobs posted!");
      } else {
        availableJobs.forEach(function (currentValue, index) {
          window.alert(
            "Job index: " +
              index +
              "\n\nJob name: " +
              currentValue.jobName +
              "\n\nJob description: " +
              currentValue.jobDesc
          );
        });
      }
      break;
    case 2:
      let jobPost = { jobName: "", jobDesc: "", jobDate: "", candidates: [] };
      jobPost.jobName = window.prompt("Enter the job name:");
      jobPost.jobDesc = window.prompt("Write a short description for the job:");
      jobPost.jobDate = window.prompt(
        "Write the deadline for applications (mm/dd/yyyy format):"
      );
      availableJobs.push(jobPost);
      break;
    case 3:
      let selection = parseInt(
        window.prompt("Enter the index of the job you wish to view:")
      );
      if (availableJobs[selection] !== undefined) {
        window.alert(
          "Job index: " +
            selection +
            "\n\nJob name: " +
            availableJobs[selection].jobName +
            "\n\nJob description: " +
            availableJobs[selection].jobDesc +
            "\n\nDeadline: " +
            availableJobs[selection].jobDate +
            "\n\nNumber of candidates: " +
            availableJobs[selection].candidates.length +
            "\n\nCandidates: " +
            availableJobs[selection].candidates
        );
      } else {
        window.alert("Please enter a valid index!");
      }
      break;
    case 4:
      let candidateName = window.prompt("Enter the candidate's name:");
      let applicationIndex = parseInt(
        window.prompt("Enter the job index for registration:")
      );
      if (availableJobs[applicationIndex] !== undefined) {
        let applicationConfirm = window.prompt(
          "Job index: " +
            applicationIndex +
            "\n\nJob name: " +
            availableJobs[applicationIndex].jobName +
            "\n\nJob description: " +
            availableJobs[applicationIndex].jobDesc +
            "\n\nDeadline: " +
            availableJobs[applicationIndex].jobDate +
            "\n\nNumber of candidates: " +
            availableJobs[applicationIndex].candidates.length +
            "\n\nConfirm the registration? Type 'Yes' or 'No' (Case sensitive):"
        );
        if (applicationConfirm === "Yes") {
          availableJobs[applicationIndex].candidates.push(candidateName);
          window.alert("Registration confirmed!");
        } else {
          window.alert("Registration canceled.");
        }
      } else {
        window.alert("Please enter a valid index!");
      }
      break;
    case 5:
      let deleteIndex = parseInt(
        window.prompt("Enter the index of the job you wish to delete:")
      );
      if (availableJobs[deleteIndex] !== undefined) {
        let deleteConfirm = window.prompt(
          "Job index: " +
            deleteIndex +
            "\n\nJob name: " +
            availableJobs[deleteIndex].jobName +
            "\n\nJob description: " +
            availableJobs[deleteIndex].jobDesc +
            "\n\nDeadline: " +
            availableJobs[deleteIndex].jobDate +
            "\n\nNumber of candidates: " +
            availableJobs[deleteIndex].candidates.length +
            "\n\nConfirm the deletion? Type 'Yes' or 'No' (Case sensitive):"
        );
        if (deleteConfirm === "Yes") {
          availableJobs.splice(deleteIndex, 1);
          window.alert("Deletion confirmed!");
        } else {
          window.alert("Deletion canceled.");
        }
      } else {
        window.alert("Please enter a valid index!");
      }
      break;
    case 6:
      window.alert("System shutting down...");
      exec = false;
      break;
    default:
      window.alert("Please type a number between 1 and 6!");
      break;
  }
} while (exec === true);
