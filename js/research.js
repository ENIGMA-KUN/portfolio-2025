// D3.js visualizations for research.html

// LLM Capability Threshold Visualization
function initCapabilityVisualization() {
    const container = document.getElementById('capability-visualization');
    const width = container.clientWidth;
    const height = 400;
    const margin = { top: 40, right: 50, bottom: 60, left: 60 };
    
    // Clear previous content
    container.innerHTML = '';
    
    // Create SVG
    const svg = d3.select('#capability-visualization')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Data for capability thresholds across model sizes
    const data = [
        { modelSize: 7, capability: 48, label: "7B" },
        { modelSize: 13, capability: 62, label: "13B" },
        { modelSize: 20, capability: 71, label: "20B" },
        { modelSize: 33, capability: 79, label: "33B" },
        { modelSize: 52, capability: 83, label: "52B" },
        { modelSize: 72, capability: 91, label: "72B" }
    ];
    
    // Create scales
    const xScale = d3.scaleLog()
        .domain([5, 80])
        .range([margin.left, width - margin.right]);
    
    const yScale = d3.scaleLinear()
        .domain([40, 100])
        .range([height - margin.bottom, margin.top]);
    
    // Create axes
    const xAxis = d3.axisBottom(xScale)
        .tickValues([7, 13, 20, 33, 52, 72])
        .tickFormat(d => d + 'B');
    
    const yAxis = d3.axisLeft(yScale);
    
    // Add axes to SVG
    svg.append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(xAxis)
        .attr('color', '#9ca3af')
        .call(g => g.select('.domain').attr('stroke', '#9ca3af'))
        .call(g => g.selectAll('.tick line').attr('stroke', '#9ca3af'));
    
    svg.append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(yAxis)
        .attr('color', '#9ca3af')
        .call(g => g.select('.domain').attr('stroke', '#9ca3af'))
        .call(g => g.selectAll('.tick line').attr('stroke', '#9ca3af'));
    
    // Add axis labels
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height - 15)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .text('Model Size (Parameters)');
    
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .text('Capability Score (%)');
    
    // Create a line generator
    const line = d3.line()
        .x(d => xScale(d.modelSize))
        .y(d => yScale(d.capability))
        .curve(d3.curveMonotoneX);
    
    // Add the capability line
    svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#4f46e5')
        .attr('stroke-width', 3)
        .attr('d', line);
    
    // Add a path for the area below the line
    const area = d3.area()
        .x(d => xScale(d.modelSize))
        .y0(height - margin.bottom)
        .y1(d => yScale(d.capability))
        .curve(d3.curveMonotoneX);
    
    svg.append('path')
        .datum(data)
        .attr('fill', 'url(#gradient)')
        .attr('d', area);
    
    // Add gradient for the area
    const gradient = svg.append('defs')
        .append('linearGradient')
        .attr('id', 'gradient')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%');
    
    gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#4f46e5')
        .attr('stop-opacity', 0.7);
    
    gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#4f46e5')
        .attr('stop-opacity', 0.1);
    
    // Add data points
    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => xScale(d.modelSize))
        .attr('cy', d => yScale(d.capability))
        .attr('r', 6)
        .attr('fill', '#4f46e5')
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 2);
    
    // Add labels
    svg.selectAll('.label')
        .data(data)
        .enter()
        .append('text')
        .attr('x', d => xScale(d.modelSize))
        .attr('y', d => yScale(d.capability) - 15)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .text(d => d.capability + '%');
    
    // Add threshold markers
    svg.append('line')
        .attr('x1', margin.left)
        .attr('y1', yScale(70))
        .attr('x2', width - margin.right)
        .attr('y2', yScale(70))
        .attr('stroke', '#ef4444')
        .attr('stroke-width', 1.5)
        .attr('stroke-dasharray', '5,5');
    
    svg.append('text')
        .attr('x', width - margin.right + 5)
        .attr('y', yScale(70))
        .attr('alignment-baseline', 'middle')
        .attr('fill', '#ef4444')
        .attr('font-size', '12px')
        .text('Threshold (70%)');
    
    // Add title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .text('LLM Capability Threshold Analysis');
}

// E-manifold Metric Comparison Visualization
function initMetricComparisonVisualization() {
    const container = document.getElementById('metric-comparison');
    const width = container.clientWidth;
    const height = 400;
    const margin = { top: 40, right: 120, bottom: 60, left: 60 };
    
    // Clear previous content
    container.innerHTML = '';
    
    // Create SVG
    const svg = d3.select('#metric-comparison')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Comparison data
    const data = [
        { method: 'Traditional', accuracy: 52, time: 100 },
        { method: 'Baseline', accuracy: 64, time: 85 },
        { method: 'E-manifold', accuracy: 87, time: 58 }
    ];
    
    // Create scales
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.method))
        .range([margin.left, width - margin.right])
        .padding(0.3);
    
    const yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([height - margin.bottom, margin.top]);
    
    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    
    // Add axes to SVG
    svg.append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(xAxis)
        .attr('color', '#9ca3af')
        .call(g => g.select('.domain').attr('stroke', '#9ca3af'))
        .call(g => g.selectAll('.tick line').attr('stroke', '#9ca3af'));
    
    svg.append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(yAxis)
        .attr('color', '#9ca3af')
        .call(g => g.select('.domain').attr('stroke', '#9ca3af'))
        .call(g => g.selectAll('.tick line').attr('stroke', '#9ca3af'));
    
    // Add y-axis label
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .text('Percentage (%)');
    
    // Add title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .text('E-manifold vs. Traditional Metrics');
    
    // Color scale for bars
    const colorScale = d3.scaleOrdinal()
        .domain(['accuracy', 'time'])
        .range(['#4f46e5', '#ef4444']);
    
    // Create legend
    const legend = svg.append('g')
        .attr('transform', `translate(${width - margin.right + 20}, ${margin.top + 20})`);
    
    legend.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', colorScale('accuracy'));
    
    legend.append('text')
        .attr('x', 25)
        .attr('y', 12.5)
        .attr('fill', '#e5e7eb')
        .text('Accuracy');
    
    legend.append('rect')
        .attr('x', 0)
        .attr('y', 30)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', colorScale('time'));
    
    legend.append('text')
        .attr('x', 25)
        .attr('y', 42.5)
        .attr('fill', '#e5e7eb')
        .text('Compute Time');
    
    // Create grouped bars
    // Accuracy bars
    svg.selectAll('.accuracy-bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'accuracy-bar')
        .attr('x', d => xScale(d.method))
        .attr('y', d => yScale(d.accuracy))
        .attr('width', xScale.bandwidth() / 2)
        .attr('height', d => height - margin.bottom - yScale(d.accuracy))
        .attr('fill', colorScale('accuracy'));
    
    // Time bars (inverted because lower is better)
    svg.selectAll('.time-bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'time-bar')
        .attr('x', d => xScale(d.method) + xScale.bandwidth() / 2)
        .attr('y', d => yScale(d.time))
        .attr('width', xScale.bandwidth() / 2)
        .attr('height', d => height - margin.bottom - yScale(d.time))
        .attr('fill', colorScale('time'));
    
    // Add labels for accuracy
    svg.selectAll('.accuracy-label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'accuracy-label')
        .attr('x', d => xScale(d.method) + xScale.bandwidth() / 4)
        .attr('y', d => yScale(d.accuracy) - 5)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .attr('font-size', '12px')
        .text(d => d.accuracy + '%');
    
    // Add labels for time
    svg.selectAll('.time-label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'time-label')
        .attr('x', d => xScale(d.method) + xScale.bandwidth() * 3/4)
        .attr('y', d => yScale(d.time) - 5)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .attr('font-size', '12px')
        .text(d => d.time + '%');
}

// Multimodal Fusion Architecture Visualization
function initMultimodalArchitecture() {
    const container = document.getElementById('multimodal-architecture');
    const width = container.clientWidth;
    const height = 400;
    
    // Clear previous content
    container.innerHTML = '';
    
    // Create SVG
    const svg = d3.select('#multimodal-architecture')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Define architecture components
    const components = [
        { id: 'image', name: 'Image Input', type: 'input', x: width * 0.2, y: height * 0.15, width: width * 0.2, height: height * 0.15, color: '#10b981' },
        { id: 'text', name: 'Text Input', type: 'input', x: width * 0.6, y: height * 0.15, width: width * 0.2, height: height * 0.15, color: '#3b82f6' },
        { id: 'vit', name: 'Vision Transformer', type: 'model', x: width * 0.2, y: height * 0.4, width: width * 0.2, height: height * 0.15, color: '#10b981' },
        { id: 'bert', name: 'BERT Encoder', type: 'model', x: width * 0.6, y: height * 0.4, width: width * 0.2, height: height * 0.15, color: '#3b82f6' },
        { id: 'fusion', name: 'Cross-Modal Fusion', type: 'fusion', x: width * 0.35, y: height * 0.65, width: width * 0.3, height: height * 0.15, color: '#8b5cf6' },
        { id: 'output', name: 'Multimodal Output', type: 'output', x: width * 0.35, y: height * 0.85, width: width * 0.3, height: height * 0.1, color: '#ef4444' }
    ];
    
    // Define connections between components
    const connections = [
        { source: 'image', target: 'vit' },
        { source: 'text', target: 'bert' },
        { source: 'vit', target: 'fusion' },
        { source: 'bert', target: 'fusion' },
        { source: 'fusion', target: 'output' }
    ];
    
    // Draw connections
    svg.selectAll('.connection')
        .data(connections)
        .enter()
        .append('path')
        .attr('class', 'connection')
        .attr('d', d => {
            const source = components.find(c => c.id === d.source);
            const target = components.find(c => c.id === d.target);
            const sourceX = source.x + source.width / 2;
            const sourceY = source.y + source.height;
            const targetX = target.x + target.width / 2;
            const targetY = target.y;
            
            // Create curved path
            return `M ${sourceX} ${sourceY} C ${sourceX} ${(sourceY + targetY) / 2}, ${targetX} ${(sourceY + targetY) / 2}, ${targetX} ${targetY}`;
        })
        .attr('fill', 'none')
        .attr('stroke', '#6b7280')
        .attr('stroke-width', 2)
        .attr('marker-end', 'url(#arrow)');
    
    // Add arrow marker for connections
    svg.append('defs')
        .append('marker')
        .attr('id', 'arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 8)
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#6b7280');
    
    // Draw components
    const componentGroups = svg.selectAll('.component')
        .data(components)
        .enter()
        .append('g')
        .attr('class', 'component')
        .attr('transform', d => `translate(${d.x}, ${d.y})`);
    
    // Add rectangles for components
    componentGroups.append('rect')
        .attr('width', d => d.width)
        .attr('height', d => d.height)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', d => d.color)
        .attr('opacity', 0.8)
        .attr('stroke', '#e5e7eb')
        .attr('stroke-width', 1);
    
    // Add text labels for components
    componentGroups.append('text')
        .attr('x', d => d.width / 2)
        .attr('y', d => d.height / 2)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', '#ffffff')
        .attr('font-weight', 'bold')
        .text(d => d.name);
    
    // Add title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .text('Multimodal Fusion Architecture');
}

// Medical Image Segmentation Results Visualization
function initMedicalImageVisualization() {
    const container = document.getElementById('medical-visualization');
    const width = container.clientWidth;
    const height = 400;
    const margin = { top: 40, right: 50, bottom: 60, left: 60 };
    
    // Clear previous content
    container.innerHTML = '';
    
    // Create SVG
    const svg = d3.select('#medical-visualization')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Create metrics data
    const metrics = [
        { name: 'Accuracy', value: 92, color: '#10b981' },
        { name: 'Sensitivity', value: 89, color: '#3b82f6' },
        { name: 'Specificity', value: 94, color: '#8b5cf6' },
        { name: 'Dice Score', value: 88, color: '#ef4444' }
    ];
    
    // Create scales
    const xScale = d3.scaleBand()
        .domain(metrics.map(d => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.4);
    
    const yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([height - margin.bottom, margin.top]);
    
    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    
    // Add axes to SVG
    svg.append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(xAxis)
        .attr('color', '#9ca3af')
        .call(g => g.select('.domain').attr('stroke', '#9ca3af'))
        .call(g => g.selectAll('.tick line').attr('stroke', '#9ca3af'));
    
    svg.append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(yAxis)
        .attr('color', '#9ca3af')
        .call(g => g.select('.domain').attr('stroke', '#9ca3af'))
        .call(g => g.selectAll('.tick line').attr('stroke', '#9ca3af'));
    
    // Add y-axis label
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .text('Percentage (%)');
    
    // Add title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .text('Medical Image Segmentation Performance');
    
    // Add baseline
    svg.append('line')
        .attr('x1', margin.left)
        .attr('y1', yScale(80))
        .attr('x2', width - margin.right)
        .attr('y2', yScale(80))
        .attr('stroke', '#6b7280')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '5,5');
    
    svg.append('text')
        .attr('x', width - margin.right + 5)
        .attr('y', yScale(80))
        .attr('alignment-baseline', 'middle')
        .attr('fill', '#6b7280')
        .attr('font-size', '12px')
        .text('Baseline (80%)');

    // Create bars with animation
    svg.selectAll('.bar')
        .data(metrics)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.name))
        .attr('width', xScale.bandwidth())
        .attr('y', height - margin.bottom)
        .attr('height', 0)
        .attr('fill', d => d.color)
        .attr('rx', 4)
        .attr('ry', 4)
        .transition()
        .duration(1000)
        .attr('y', d => yScale(d.value))
        .attr('height', d => height - margin.bottom - yScale(d.value));
    
    // Add labels on top of bars
    svg.selectAll('.label')
        .data(metrics)
        .enter()
        .append('text')
        .attr('class', 'label')
        .attr('x', d => xScale(d.name) + xScale.bandwidth() / 2)
        .attr('y', d => yScale(d.value) - 10)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .text(d => d.value + '%')
        .style('opacity', 0)
        .transition()
        .duration(1000)
        .style('opacity', 1);
}

// RAG System Performance Visualization
function initRAGVisualization() {
    const container = document.getElementById('rag-visualization');
    const width = container.clientWidth;
    const height = 400;
    const margin = { top: 40, right: 100, bottom: 60, left: 60 };
    
    // Clear previous content
    container.innerHTML = '';
    
    // Create SVG
    const svg = d3.select('#rag-visualization')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Create data
    const data = [
        { metric: 'Answer Accuracy', baseline: 52, improved: 92 },
        { metric: 'Hallucinations', baseline: 65, improved: 23 },
        { metric: 'Response Time', baseline: 85, improved: 58 },
        { metric: 'Context Usage', baseline: 45, improved: 82 }
    ];
    
    // Set up scales
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.metric))
        .range([margin.left, width - margin.right])
        .padding(0.3);
    
    const yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([height - margin.bottom, margin.top]);
    
    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    
    // Add axes to SVG
    svg.append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(xAxis)
        .attr('color', '#9ca3af')
        .call(g => g.select('.domain').attr('stroke', '#9ca3af'))
        .call(g => g.selectAll('.tick line').attr('stroke', '#9ca3af'));
    
    svg.append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(yAxis)
        .attr('color', '#9ca3af')
        .call(g => g.select('.domain').attr('stroke', '#9ca3af'))
        .call(g => g.selectAll('.tick line').attr('stroke', '#9ca3af'));
    
    // Add y-axis label
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .text('Percentage (%)');
    
    // Add title
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .text('RAG System Performance Improvements');
    
    // Create bars
    // Baseline bars
    svg.selectAll('.baseline-bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'baseline-bar')
        .attr('x', d => xScale(d.metric))
        .attr('y', d => yScale(d.baseline))
        .attr('width', xScale.bandwidth() / 2)
        .attr('height', d => height - margin.bottom - yScale(d.baseline))
        .attr('fill', '#6b7280');
    
    // Improved bars
    svg.selectAll('.improved-bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'improved-bar')
        .attr('x', d => xScale(d.metric) + xScale.bandwidth() / 2)
        .attr('y', d => yScale(d.improved))
        .attr('width', xScale.bandwidth() / 2)
        .attr('height', d => height - margin.bottom - yScale(d.improved))
        .attr('fill', '#f59e0b');
    
    // Add labels for baseline
    svg.selectAll('.baseline-label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'baseline-label')
        .attr('x', d => xScale(d.metric) + xScale.bandwidth() / 4)
        .attr('y', d => yScale(d.baseline) - 5)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .attr('font-size', '12px')
        .text(d => d.baseline + '%');
    
    // Add labels for improved
    svg.selectAll('.improved-label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'improved-label')
        .attr('x', d => xScale(d.metric) + xScale.bandwidth() * 3/4)
        .attr('y', d => yScale(d.improved) - 5)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e5e7eb')
        .attr('font-size', '12px')
        .text(d => d.improved + '%');
    
    // Create legend
    const legend = svg.append('g')
        .attr('transform', `translate(${width - margin.right + 20}, ${margin.top + 20})`);
    
    legend.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', '#6b7280');
    
    legend.append('text')
        .attr('x', 25)
        .attr('y', 12.5)
        .attr('fill', '#e5e7eb')
        .text('Baseline');
    
    legend.append('rect')
        .attr('x', 0)
        .attr('y', 30)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', '#f59e0b');
    
    legend.append('text')
        .attr('x', 25)
        .attr('y', 42.5)
        .attr('fill', '#e5e7eb')
        .text('RAG System');
}

// Initialize visualizations when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all visualizations on research.html
    if (document.getElementById('capability-visualization')) {
        initCapabilityVisualization();
    }
    
    if (document.getElementById('metric-comparison')) {
        initMetricComparisonVisualization();
    }
    
    if (document.getElementById('multimodal-architecture')) {
        initMultimodalArchitecture();
    }
    
    if (document.getElementById('medical-visualization')) {
        initMedicalImageVisualization();
    }
    
    if (document.getElementById('rag-visualization')) {
        initRAGVisualization();
    }
    
    // Add resize event listener to make visualizations responsive
    window.addEventListener('resize', function() {
        if (document.getElementById('capability-visualization')) {
            initCapabilityVisualization();
        }
        
        if (document.getElementById('metric-comparison')) {
            initMetricComparisonVisualization();
        }
        
        if (document.getElementById('multimodal-architecture')) {
            initMultimodalArchitecture();
        }
        
        if (document.getElementById('medical-visualization')) {
            initMedicalImageVisualization();
        }
        
        if (document.getElementById('rag-visualization')) {
            initRAGVisualization();
        }
    });
});