from django.db import models


class Company(models.Model):
  name = models.TextField()

  def __str__(self):
    return self.name


class Job(models.Model):
  title = models.TextField()
  company = models.ForeignKey(Company, related_name='jobs', on_delete=models.CASCADE)

  def __str__(self):
    return self.title
