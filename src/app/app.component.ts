import { Component, OnInit, ViewChild, AfterContentChecked, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as shape from 'd3-shape';
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';
import { nodes, links, clusters } from './data';
import { Subject } from 'rxjs';
import { GraphComponent } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('graph', { static: false }) graph: any;
  init = false;
  nodes = nodes;
  clusters = clusters;
  interval: any;
  links = links;
  setting = {
    orientation: 'LR',
    marginX: 50,
    marginY: 50,
    edgePadding: 100,
    rankPadding: 200,
    nodePadding: 50,
    multigraph: true,
    compound: true,
  }


  constructor(private cdRef: ChangeDetectorRef) {

  }
  // line interpolation
  curveType: string = 'Step';
  curve: any = shape.curveLinear;

  draggingEnabled: boolean = true;
  panningEnabled: boolean = true;
  zoomEnabled: boolean = true;

  zoomSpeed: number = 0.1;
  minZoomLevel: number = 0.1;
  maxZoomLevel: number = 4.0;
  panOnZoom: boolean = true;

  autoZoom: boolean = false;
  autoCenter: boolean = false;

  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();
  updateRealtions$: Subject<boolean> = new Subject();

  ngOnInit() {
    this.curve = shape.curveNatural;
    this.zoomToFit$.next(true)

    this.update$.subscribe(response => {
      console.log('updated');
    })
    this.center$.subscribe(response => {
      console.log('center', response)
    })

    this.zoomToFit$.subscribe(response => {
      console.log(response)
    });
  }

  ngAfterViewInit() {
    console.log('initialized', this.graph.initialized)
    this.checkPosition();
    console.log('init time at', new Date())

    this.cdRef.detectChanges();

  }

  checkPosition() {
    console.log('position icons now')
    this.init = !this.init;
    this.update$.next(true)
  }

  alert() {
    console.log('hi');
    
  }
}
