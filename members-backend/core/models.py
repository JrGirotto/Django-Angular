from django.db import models

class Member(models.Model):
	name = models.CharField(max_length=100)
	surname = models.CharField(max_length=100)
	phone = models.CharField(max_length=50)
	email = models.EmailField(max_length=100)
	address = models.CharField(max_length=150)
	photo = models.ImageField(upload_to='member_profile')

	def __str__(self):
		return self.name