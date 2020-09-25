import React from "react";
import "./SVG1.css";
import "./../svg.css";

export default function SVG1(props: any) {
  return (
    <div className="SVG SVG1">
      <svg className="SVG_picture">
        <path
          id="valve-3"
          className="trumpet"
          d="M83.751,80.06l15.935-.843a4.67,4.67,0,0,1,4.858,4.8c0.191,4.993-8.307,4.236-8.307,4.236l0.039,22.173-8.315.079L87.923,88.336l-4.851-.647s-4.746-.435-4.165-4.118S83.751,80.06,83.751,80.06Z"
        />
        <path
          id="valve-2"
          className="trumpet"
          d="M83.751,80.06l15.935-.843a4.67,4.67,0,0,1,4.858,4.8c0.191,4.993-8.307,4.236-8.307,4.236l0.039,22.173-8.315.079L87.923,88.336l-4.851-.647s-4.746-.435-4.165-4.118S83.751,80.06,83.751,80.06Z"
        />
        <path
          id="valve-1"
          className="trumpet"
          d="M83.751,80.06l15.935-.843a4.67,4.67,0,0,1,4.858,4.8c0.191,4.993-8.307,4.236-8.307,4.236l0.039,22.173-8.315.079L87.923,88.336l-4.851-.647s-4.746-.435-4.165-4.118S83.751,80.06,83.751,80.06Z"
        />
        <path
          className="trumpet"
          d="M144.339,31.4s4.176,23.006-14.736,42.622S106.335,97.27,106.335,97.27l-6.2-6.975-10.083,9.3,5.429,6.974-7.756,7.75-6.2-4.65-9.307,9.3,5.429,6.2-8.532,8.524-6.98-5.424-9.307,9.3,5.429,6.975L32.654,170.115H28l10.858,12.4,0.776-4.65,22.492-19.373s-9.555,20.547,1.551,27.9,18.89,11.287,32.575-3.1c6.654,4.429,8.373,5.149,12.41.775,6.045-6.13-1.552-11.624-1.552-11.624l8.532-8.525s5.711,8.65,13.185,1.55-3.1-10.849-3.1-10.849l9.307-10.074s5.426,8.432,11.634,3.1-2.029-11.393-1.552-11.624,17.063-19.374,17.063-19.374A21.34,21.34,0,0,0,161.4,92.62c-8.78-12.781-17.839-7.749-17.839-7.749s14.4-15.045,41.107-13.174c9.884,8.644,15.687-2.98,12.409-6.2S148.992,19,148.992,19,136.555,18.855,144.339,31.4Zm-2.327,67.42-17.063,16.274,10.083,10.074,15.511-15.5S156.324,98.067,142.012,98.82Zm-27.146,26.348,9.307,10.074-6.98,7.75-10.858-9.3ZM96.252,144.542l-8.531,8.524,9.307,10.074,8.531-8.524Zm-17.839,18.6,9.307,10.075s-7.7,11.811-13.961,3.874S78.414,163.14,78.414,163.14Z"
        />
      </svg>
  <p className="text">{props.poem}</p>
    </div>
  );
}
