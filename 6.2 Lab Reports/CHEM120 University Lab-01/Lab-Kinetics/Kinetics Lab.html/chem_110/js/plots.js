function myChart(order) {
    if (order==0) {
        datapoints = [1,0];
        yLabel = '[CV+]';
        ident = 'zero';
        title = 'Zero Order Reaction'
    }
    else if (order==1) {
        datapoints = [1,0];
        yLabel = 'ln[CV+]';
        ident = 'first';
        title = 'First Order Reaction'
    }
    else if (order==2) {
        datapoints = [0,1];
        yLabel = '1/[CV+]';
        ident = 'second';
        title = 'Second Order Reaction'
    }
    else if (order==3) {
        datapoints = [1,0];
        yLabel = 'ln[CV+]';
        ident = 'third';
        title = 'Unknown Order Reaction'
    }

    
    
    var ctx = document.getElementById(ident).getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [0, 1],
                datasets: [{
                    data: datapoints,
                    borderColor:'#5F4B8B',
                    fill: false,
                }]},                   
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: yLabel},
                        ticks: {
                            display: false}
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'time'},
                        ticks: {
                            display: false}
                    }]    
                },
                title: {
                    display: true,
                    text: title
                },
                legend: false,
                responsive: false,
                maintainAspectRatio: false
            }
        })
}

