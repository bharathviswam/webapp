# Local Development
Clone the repository.
Navigate to the project directory (webapp/).

# Kubernetes Deployment

Apply the Kubernetes configurations:

kubectl apply -f kubernetes/database/db-deployment.yaml
kubectl apply -f kubernetes/web-server/webserver-deployment.yaml
kubectl apply -f kubernetes/app-server/appserver-deployment.yaml
Check the deployment status with kubectl get pods.

# Access the web server using the LoadBalancer service.
kubectl apply -f kubernetes/app-server/appserver-lb.yaml
kubectl apply -f kubernetes/web-server/service-lb.yaml
kubectl apply -f kubernetes/database/db-lb.yaml

There is only need for weberver service loadbalancer to be enabled, other pods can communicate using clusterIP service

# Auto-scaling: Horizontal Pod Autoscaler (HPA) for the web server and app server deployments based on CPU.
kubectl apply -f kubernetes/web-server/web-server-hpa.yaml
kubectl apply -f kubernetes/app-server/app-server-hpa.yaml

# Additional Considerations

Security: Use secrets for sensitive data like database credentials. Implement network policies and security contexts for pods.
Monitoring: Set up logging and monitoring using tools like Prometheus, Grafana, or Kubernetes-native monitoring solutions.
CI/CD: Implement Continuous Integration and Continuous Deployment pipelines using tools like Jenkins, GitLab CI/CD, or GitHub Actions.