import { Component, AfterViewInit } from '@angular/core';
import emailjs from 'emailjs-com';

declare global {
  interface Window {
    changeImage: (projectIndex: number, direction: number) => void;
    setActiveImage: (projectIndex: number, imageIndex: number) => void;
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit {
  private currentImageIndex: number[] = [0, 0, 0, 0]; 
  private totalImages: number[] = [3, 3, 3, 3]; 

  ngAfterViewInit(): void {
    emailjs.init('S0G1yM94KHHIxtGqP'); 

    const form = document.getElementById('contact-form') as HTMLFormElement;

    form?.addEventListener('submit', (e) => {
      e.preventDefault();

      emailjs
        .sendForm('service_y3u9g9u', 'template_n0rajpp', form)
        .then(() => {
          alert('Mensaje enviado correctamente');
          form.reset();
        })
        .catch((error) => {
          alert('Error al enviar el mensaje: ' + JSON.stringify(error));
        });
    });

    this.setupCarouselFunctions();
  }

  private setupCarouselFunctions(): void {
    window.changeImage = (projectIndex: number, direction: number) => {
      this.currentImageIndex[projectIndex] += direction;
      
      if (this.currentImageIndex[projectIndex] < 0) {
        this.currentImageIndex[projectIndex] = this.totalImages[projectIndex] - 1;
      } else if (this.currentImageIndex[projectIndex] >= this.totalImages[projectIndex]) {
        this.currentImageIndex[projectIndex] = 0;
      }
      
      this.updateActiveImage(projectIndex, this.currentImageIndex[projectIndex]);
    };

    window.setActiveImage = (projectIndex: number, imageIndex: number) => {
      this.currentImageIndex[projectIndex] = imageIndex;
      this.updateActiveImage(projectIndex, imageIndex);
    };
  }

  private updateActiveImage(projectIndex: number, imageIndex: number): void {
    const carousels = document.querySelectorAll('.image-carousel');
    const carousel = carousels[projectIndex];
    
    if (carousel) {
      const images = carousel.querySelectorAll('.proyecto-image');
      images.forEach((img, index) => {
        img.classList.toggle('active', index === imageIndex);
      });
      
      const indicators = carousel.querySelectorAll('.indicator');
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === imageIndex);
      });
    }
  }
}
