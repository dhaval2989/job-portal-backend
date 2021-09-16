const mongoose = require('mongoose');
const schema = mongoose.Schema;

const profileSchema = new schema({
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  profileImage: { type: String, required: true },
  gender: { type: String, required: true },
  emailId: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  address: { type: String, required: true },
  locality: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
  workPeriod: { type: String, required: true },
  workType: { type: String, required: true },
  workLocationPreference: { type: String, required: true },
  educations: [
    {
      id: String,
      boardName: String,
      instituteName: { type: String, required: true },
      course: { type: String, required: true },
      specialization: { type: String, required: true },
      educationName: { type: String, required: true },
      score: String,
      passingOutYear: { type: String, required: true },
      certificate: { type: String, required: true }
    }
  ],
  experiences: [
    {
      id: String,
      experienceType: { type: String, required: true },
      companyName: { type: String, required: true },
      designation: { type: String, required: true },
      joiningDate: { type: Date, required: true },
      leavingDate: { type: Date, required: false, default: null },
      skills: { type: Array, required: true }
    }
  ],
  certificates: [
    {
      id: String,
      certificateName: { type: String, required: true },
      instituteName: { type: String, required: true },
      type: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
      certificate: { type: String, required: true }
    }
  ],
  exams: [
    {
      id: String,
      examName: { type: String, required: true },
      profileUrl: { type: String, required: true },
      score: { type: String, required: true },
      certificate: { type: String, required: true }
    }
  ],
  languages: [
    {
      id: String,
      langName: { type: String, required: true },
      read: { type: Boolean, required: true },
      write: { type: Boolean, required: true },
      speak: { type: Boolean, required: true }
    }
  ],
  resume: { type: String, required: true }
});

const ProfileData = mongoose.model('profile', profileSchema);
module.exports = ProfileData;