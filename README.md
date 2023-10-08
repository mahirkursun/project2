# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
<!DOCTYPE html>
<html lang="en">
  <!-- https://tobiasahlin.com/blog/introduction-to-chartjs/ -->
  <!-- https://codepen.io/elisescolaro/details/YaGyMW -->
  <!-- https://www.chartjs.org/samples/latest/charts/bar/stacked.html -->
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script>
    <style>
      body,
      html {
        background: #181e24;
        padding-top: 10px;
      }

      .wrapper {
        width: 60%;
        display: block;
        overflow: hidden;
        margin: 0 auto;
        padding: 60px 50px;
        background: #fff;
        border-radius: 4px;
      }

      canvas {
        background: #fff;
        height: 400px;
      }

      h1 {
        font-family: Roboto;
        color: #fff;
        margin-top: 50px;
        font-weight: 200;
        text-align: center;
        display: block;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <canvas id="myChart4"></canvas>
    </div>
    <div>
      <canvas id="mixed-chart" width="800" height="450"></canvas>
    </div>
    <div>
      <canvas id="bar-chart-grouped" width="800" height="450"></canvas>
    </div>
    <div>
      <canvas id="doughnut-chart" width="800" height="450"></canvas>
    </div>
    <div>
      <canvas id="pie-chart" width="400" height="250"></canvas>
    </div>
    <div>
      <canvas id="bar-chart" width="400" height="250"></canvas>
    </div>
    <div>
      <canvas id="line-chart" width="400" height="250"></canvas>
    </div>

    <script>
      var ctx = document.getElementById('myChart4').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            '<  1',
            '1 - 2',
            '3 - 4',
            '5 - 9',
            '10 - 14',
            '15 - 19',
            '20 - 24',
            '25 - 29',
            '> - 29',
          ],
          datasets: [
            {
              label: 'Employee',
              backgroundColor: '#caf270',
              data: [12, 59, 5, 56, 58, 12, 59, 87, 45],
            },
            {
              label: 'Engineer',
              backgroundColor: '#45c490',
              data: [12, 59, 5, 56, 58, 12, 59, 85, 23],
            },
            {
              label: 'Government',
              backgroundColor: '#008d93',
              data: [12, 59, 5, 56, 58, 12, 59, 65, 51],
            },
            {
              label: 'Political parties',
              backgroundColor: '#2e5468',
              data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
            },
          ],
        },
        options: {
          tooltips: {
            displayColors: true,
            callbacks: {
              mode: 'x',
            },
          },
          scales: {
            xAxes: [
              {
                stacked: true,
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                },
                type: 'linear',
              },
            ],
          },
          responsive: true,
          maintainAspectRatio: false,
          legend: {position: 'bottom'},
        },
      });
      // <canvas id="mixed-chart" width="800" height="450"></canvas>
      new Chart(document.getElementById('mixed-chart'), {
        type: 'bar',
        data: {
          labels: ['1900', '1950', '1999', '2050'],
          datasets: [
            {
              label: 'Europe',
              type: 'line',
              borderColor: '#8e5ea2',
              data: [408, 547, 675, 734],
              fill: false,
            },
            {
              label: 'Africa',
              type: 'line',
              borderColor: '#3e95cd',
              data: [133, 221, 783, 2478],
              fill: false,
            },
            {
              label: 'Europe',
              type: 'bar',
              backgroundColor: 'rgba(0,0,0,0.2)',
              data: [408, 547, 675, 734],
            },
            {
              label: 'Africa',
              type: 'bar',
              backgroundColor: 'rgba(0,0,0,0.2)',
              backgroundColorHover: '#3e95cd',
              data: [133, 221, 783, 2478],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: 'Population growth (millions): Europe & Africa',
          },
          legend: {display: false},
        },
      });
      // grouped bar chart
      new Chart(document.getElementById('bar-chart-grouped'), {
        type: 'bar',
        data: {
          labels: ['1900', '1950', '1999', '2050'],
          datasets: [
            {
              label: 'Africa',
              backgroundColor: '#3e95cd',
              data: [133, 221, 783, 2478],
            },
            {
              label: 'Europe',
              backgroundColor: '#8e5ea2',
              data: [408, 547, 675, 734],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: 'Population growth (millions)',
          },
        },
      });

      //doughnut chart
      new Chart(document.getElementById('doughnut-chart'), {
        type: 'doughnut',
        data: {
          labels: [
            'Africa',
            'Asia',
            'Europe',
            'Latin America',
            'North America',
          ],
          datasets: [
            {
              label: 'Population (millions)',
              backgroundColor: [
                '#3e95cd',
                '#8e5ea2',
                '#3cba9f',
                '#e8c3b9',
                '#c45850',
              ],
              data: [2478, 5267, 734, 784, 433],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050',
          },
        },
      });
      // pie chart
      new Chart(document.getElementById('pie-chart'), {
        type: 'pie',
        data: {
          labels: [
            'Africa',
            'Asia',
            'Europe',
            'Latin America',
            'North America',
          ],
          datasets: [
            {
              label: 'Population (millions)',
              backgroundColor: [
                '#3e95cd',
                '#8e5ea2',
                '#3cba9f',
                '#e8c3b9',
                '#c45850',
              ],
              data: [2478, 5267, 734, 784, 433],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050',
          },
        },
      });
      // line chart
      new Chart(document.getElementById('line-chart'), {
        type: 'line',
        data: {
          labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
          datasets: [
            {
              data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
              label: 'Africa',
              borderColor: '#3e95cd',
              fill: false,
            },
            {
              data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
              label: 'Asia',
              borderColor: '#8e5ea2',
              fill: false,
            },
            {
              data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
              label: 'Europe',
              borderColor: '#3cba9f',
              fill: false,
            },
            {
              data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
              label: 'Latin America',
              borderColor: '#e8c3b9',
              fill: false,
            },
            {
              data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
              label: 'North America',
              borderColor: '#c45850',
              fill: false,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: 'World population per region (in millions)',
          },
        },
      });
      // Bar chart
      new Chart(document.getElementById('bar-chart'), {
        type: 'bar',
        data: {
          labels: [
            'Africa',
            'Asia',
            'Europe',
            'Latin America',
            'North America',
          ],
          datasets: [
            {
              label: 'Population (millions)',
              backgroundColor: [
                '#3e95cd',
                '#8e5ea2',
                '#3cba9f',
                '#e8c3b9',
                '#c45850',
              ],
              data: [2478, 5267, 734, 784, 433],
            },
          ],
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050',
          },
        },
      });
    </script>
  </body>
</html>
