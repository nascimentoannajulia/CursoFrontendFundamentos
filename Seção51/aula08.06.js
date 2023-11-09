<!doctype html>
<html>
    <head>
        <title>Curso Javascript Completo 2018</title>
        <meta charset="utf-8">  
        
        <style>
            .done{
                 text-decoration: line-through;
                 color: #555;
            }
        </style>
          
    </head>
    
    <body>
        <div class="container">
            <h1>Curso Javascript Completo 2018</h1>
            
            <input type="text" id="txtTask"><br>
            <button>cadastrar tarefa</button>
            
            <ul>
                 <li>estudar Javascript - Dom</li>
                <li>estudar eventos em Javascript</li>
                <li>jogar video-game</li>
            </ul>
            
         </div>
        
        <script>
            
            (function(){
              'use strict';
                
              var $ul = document.querySelector('ul');
              var $lis = $ul.querySelector('li');
              var $txtTask = document.querySelector('#txtTask');
              var $btn = document.querySelector('#btn');
                
             $btn.addEventListerner('click', addTask);
             $txtTask.addEventListener('keyup', function(e){
               if(e.keyCode === 13) {
                        addTask();
                    }
                        
                })
                
                $ul.addEventListener('click', function(e){
                    debugger
                    if(e.target.nodeName === 'LI'){
                        removeTask(e.target);
                    }
                })
                
                function removeTask(li){
                    if(confirm('deseja realmente excluir?')){
                     console.log(li.parentNode);
                        li.parentNode.removeChild(li);
                    }
                }
                
                function addTask(){
                  
                    
                    var li = document.createElement('li');
                    var text = document.createTextNode($txtTask.value);
                    
                    li.appendChild(text);
                    
                    $ul.appendChild(li);
                    
                    $txtTask.value = '';
                    $txtTask.focus();
                                                 
            })()
                       
        </script>
        
    </body>
</html>