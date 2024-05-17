(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("tabla-body");fetch("/productos.json").then(r=>r.json()).then(r=>{r.forEach(o=>{const n=document.createElement("tr");n.innerHTML=`
                        <td><img src="${o.imagen}" alt="${o.descripcion}" class="product-image"></td>
                        <td>${o.descripcion} COP</td>
                        <td>${o.precio} COP</td>
                        <td><input type="number" min="0" class="form-control"/></td>
                        <td><input type="number" class="form-control"/></td>
                    `,s.appendChild(n)})}).catch(r=>{console.error("Error al cargar los datos:",r)})});
