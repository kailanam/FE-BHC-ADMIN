import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from "../components/side-bar/side-bar.component";
import { HeaderComponent } from '../components/header/header.component';
import { MOCK_FACULTY, Faculty } from '../components/mockdata/mock-faculty';

type EvalScoreItem = {
  question: string;
  score: number;
};

const MOCK_EVAL_SCORES_A: EvalScoreItem[] = [
  { question: 'My learning in the course is facilitated by the way the instructor organized course material to fit our needs.', score: 4 },
  { question: 'My understanding of the course materials is ably aided by the instructor\'s ability to clearly communicate the course and lessons of the day.', score: 5 },
  { question: 'I am interested in the subject matter because of the instructor\'s interest and enthusiasm in the subject.', score: 4 },
  { question: 'My learning improved because of my instructor\'s interest and concern in my studies.', score: 3 },
  { question: 'I learned the lessons because the instructor established major points with illustrations, applications, and/or summaries.', score: 4 },
  { question: 'My understanding of the course content is much aided by the instructor\'s timely response to the questions and problems and provided individual help regarding the course content.', score: 5 },
  { question: 'My learning is improved because the instructor allowed question and discussions when appropriate.', score: 4 },
  { question: 'My learning is improved because the instructor encouraged students to analyze ideas and to think critically.', score: 5 },
];

const MOCK_EVAL_SCORES_B: EvalScoreItem[] = [
  { question: 'My interest in learning is very much improved because.', score: 4 },
  { question: 'The instructor makes good use of the session.', score: 5 },
  { question: 'The instructor allows us to interact with each other during the session.', score: 4 },
  { question: 'Discussion questions were thought provoking.', score: 3 },
  { question: 'Discussions were engaging.', score: 4 },
  { question: 'Video sessions were meaningful and helpful.', score: 5 },
];

const MOCK_EVAL_SCORES_C: EvalScoreItem[] = [
  { question: 'The materials and tasks can be accessed anytime.', score: 5 },
  { question: 'Directions/Instructions are clear to accomplish assigned tasks.', score: 4 },
  { question: 'I developed independent learning because the topics were presented interestingly and offers challenges and creativity.', score: 4 },
  { question: 'The class it reminded of the grading criteria when assessment activities are given.', score: 3 },
  { question: 'Results of tests/assignments/requirements were returned promptly within a week.', score: 4 },
  { question: 'Instructor shows care and kindness to students.', score: 5 },
];

@Component({
  selector: 'app-faculty-evalscore',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SideBarComponent, HeaderComponent],
  templateUrl: './faculty-evalscore.html',
  styleUrls: ['./faculty-evalscore.css']
})
export class FacultyEvalscore implements OnInit {
  private route = inject(ActivatedRoute)
  private router = inject(Router);
  
  faculty: Faculty | undefined;
  studentName = 'Student Name';
  sidebarOpen = false;
  currentDateTime = new Date();
  facultyList = MOCK_FACULTY;

  evalScoresA = MOCK_EVAL_SCORES_A;
  evalScoresB = MOCK_EVAL_SCORES_B;
  evalScoresC = MOCK_EVAL_SCORES_C;

  ngOnInit(): void {
    // Default to first faculty or none
    this.faculty = this.facultyList[0];
    // Update current time every second
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  todolist(): void {
    this.router.navigate(['/todolist']);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  selectFaculty(faculty: Faculty) {
    this.faculty = faculty;
  }

}