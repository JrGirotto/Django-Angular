from rest_framework import viewsets, permissions
from .serializers import MemberSerializer, MemberSimpleSerializer
from .models import Member
from rest_framework.response import Response


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def list(self, request, *args, **kwargs):
       queryset = Member.objects.all()
       serializer = MemberSimpleSerializer(queryset, many=True)
       return Response(serializer.data)




















