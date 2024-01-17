import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent {
  @Input() course?: Course;
}
